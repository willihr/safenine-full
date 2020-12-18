import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Message, Alert, PacientInfo, Measure } from 'dto/ServerResponseDTO';
import { toast } from 'react-toastify';

import api from 'utils/api';

const ToastObj = (title: string | undefined, message: string) => () => (
  <div>
    {title && <h3 style={{ marginBottom: 10 }}>{title}</h3>}
    <p>{message}</p>
  </div>
);

interface useApiInterfaceReturnType {
  connectionStatus: boolean;
  pacientsInfo: PacientInfo[];
  alerts: Alert[];
  messages: Message[];
  measures: Measure[];
}

function useApiInterface(): useApiInterfaceReturnType {
  const [connectionStatus, setConnectionStatus] = useState(false);
  const connectionStatusRef = useRef(false);
  const [pacientsInfo, setPacientsInfo] = useState<PacientInfo[]>([]);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [measures, setMeasures] = useState<Measure[]>([]);

  useEffect(() => {
    connectionStatusRef.current = connectionStatus;
  }, [connectionStatus]);

  const updateData = useCallback(() => {
    Promise.all([
      api.get<PacientInfo[]>('/pacients'),
      api.get<any>('/alerts'),
      api.get<Message[]>('/messages'),
      api.get<Measure[]>('/measures'),
    ]).then(promiseResponse => {
      const [
        pacientsRes,
        alertsRes,
        messagesRes,
        measuresRes,
      ] = promiseResponse;

      const formattedAlertRes = alertsRes.data.map((alert: Alert) => {
        const pacientName = pacientsRes.data.find(
          (pacient: PacientInfo) => pacient.id === alert.pacientId,
        );

        return {
          ...alert,
          pacientName: pacientName?.name,
        };
      });

      setPacientsInfo(pacientsRes.data);
      setAlerts(formattedAlertRes);
      setMessages(messagesRes.data);
      setMeasures(measuresRes.data);
      setConnectionStatus(true);

      const unseenAlerts = formattedAlertRes.filter(
        (item: Alert) => item.seen === false,
      );

      unseenAlerts.forEach((alert: Alert) => {
        toast.error(ToastObj(alert.pacientName, alert.message), {
          autoClose: false,
        });
        api.patch(`/alerts/${alert.id}`, { seen: true });
      });
    });
  }, []);

  useEffect(() => {
    updateData();
    const interval = setInterval(updateData, 1000);

    return () => clearInterval(interval);
  }, [updateData]);

  useEffect(() => {
    const interval = setTimeout(() => {
      if (connectionStatusRef.current !== true) {
        toast.error(
          ToastObj(
            'Conexão à central',
            'Não foi possível se conectar à central, por favor verifique sua conexão com a internet.',
          ),
          {
            autoClose: false,
          },
        );
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return { connectionStatus, pacientsInfo, alerts, messages, measures };
}

export default useApiInterface;
