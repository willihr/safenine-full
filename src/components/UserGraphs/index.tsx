import { Measure } from 'dto/ServerResponseDTO';
import React, { useCallback, useEffect, useState } from 'react';
import {
  VictoryChart,
  VictoryAxis,
  VictoryZoomContainer,
  VictoryLine,
  VictoryBrushContainer,
} from 'victory';

import { Container } from './styles';

interface UserGraphsProps {
  measures: Measure[];
  pacientId: number;
}

type GraphsSeriesType = Array<{ key: number; a: number; b: number; c: number }>;
type ZoomDomainType = { x: [number, number]; y: [number, number] | undefined };

const UserGraphs: React.FC<UserGraphsProps> = ({
  measures,
  pacientId,
}: UserGraphsProps) => {
  const [pacientInfoLoaded, setPacientInfoLoaded] = useState(false);
  const [pacientMeasures, setPacientMeasures] = useState<GraphsSeriesType>([
    { key: 1, a: 9999, b: 9999, c: 9999 },
  ]);

  const [zoomDomain1, setZoomDomain1] = useState<ZoomDomainType>();
  const [zoomDomain2, setZoomDomain2] = useState<ZoomDomainType>();
  const [zoomDomain3, setZoomDomain3] = useState<ZoomDomainType>();

  const updateAllXDomain = useCallback(
    (domain: ZoomDomainType) => {
      setZoomDomain1({ x: domain.x, y: zoomDomain1?.y });
      setZoomDomain2({ x: domain.x, y: zoomDomain2?.y });
      setZoomDomain3({ x: domain.x, y: zoomDomain3?.y });
    },
    [zoomDomain1, zoomDomain2, zoomDomain3],
  );
  const handleSetZoomDomain1 = useCallback(
    (domain: any) => {
      setZoomDomain1(domain);
      updateAllXDomain(domain);
    },
    [updateAllXDomain],
  );
  const handleSetZoomDomain2 = useCallback(
    (domain: any) => {
      setZoomDomain2(domain);
      updateAllXDomain(domain);
    },
    [updateAllXDomain],
  );
  const handleSetZoomDomain3 = useCallback(
    (domain: any) => {
      setZoomDomain3(domain);
      updateAllXDomain(domain);
    },
    [updateAllXDomain],
  );

  useEffect(() => {
    if (pacientInfoLoaded === false && measures.length) {
      const dataToSet: ZoomDomainType = {
        x: [measures[0].timestamp, measures[measures.length - 1].timestamp],
        y: undefined,
      };
      setZoomDomain1(dataToSet);
      setZoomDomain2(dataToSet);
      setZoomDomain3(dataToSet);
      setPacientInfoLoaded(true);
    }

    setPacientMeasures(
      measures
        .filter(item => item.pacientId === pacientId)
        .map(item => {
          return {
            key: item.timestamp,
            a: item.sensor1,
            b: item.sensor2,
            c: item.sensor3,
          };
        }),
    );
  }, [measures, pacientId, pacientInfoLoaded]);

  return (
    <Container>
      <h3>Histórico de medições</h3>
      <div>
        <div>
          <h4>Batimentos Cardíacos (BPM)</h4>
          <VictoryChart
            domainPadding={{ y: 20 }}
            width={500}
            height={270}
            scale={{ x: 'time', y: 'linear' }}
            containerComponent={
              <VictoryZoomContainer
                zoomDimension="x"
                zoomDomain={zoomDomain1}
                onZoomDomainChange={handleSetZoomDomain1}
              />
            }
          >
            <VictoryAxis dependentAxis tickFormat={x => parseInt(x, 10)} />
            <VictoryAxis />
            <VictoryLine
              style={{
                data: { stroke: 'tomato' },
              }}
              data={pacientMeasures}
              x="key"
              y="a"
            />
          </VictoryChart>
          <VictoryChart
            domainPadding={{ y: 20 }}
            padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
            width={500}
            height={100}
            scale={{ x: 'time' }}
            containerComponent={
              <VictoryBrushContainer
                brushDimension="x"
                brushDomain={zoomDomain1}
                onBrushDomainChange={handleSetZoomDomain1}
              />
            }
          >
            <VictoryAxis />
            <VictoryLine
              style={{
                data: { stroke: 'tomato' },
              }}
              data={pacientMeasures}
              x="key"
              y="a"
            />
          </VictoryChart>
        </div>
        <div>
          <h4>Pressão Arterial (mmHg)</h4>
          <VictoryChart
            domainPadding={{ y: 20 }}
            width={500}
            height={270}
            scale={{ x: 'time' }}
            containerComponent={
              <VictoryZoomContainer
                zoomDimension="x"
                zoomDomain={zoomDomain2}
                onZoomDomainChange={handleSetZoomDomain2}
              />
            }
          >
            <VictoryAxis dependentAxis tickFormat={x => parseInt(x, 10)} />
            <VictoryAxis />
            <VictoryLine
              style={{
                data: { stroke: 'tomato' },
              }}
              data={pacientMeasures}
              x="key"
              y="b"
            />
          </VictoryChart>
          <VictoryChart
            domainPadding={{ y: 20 }}
            padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
            width={500}
            height={100}
            scale={{ x: 'time' }}
            containerComponent={
              <VictoryBrushContainer
                brushDimension="x"
                brushDomain={zoomDomain2}
                onBrushDomainChange={handleSetZoomDomain2}
              />
            }
          >
            <VictoryAxis />
            <VictoryLine
              style={{
                data: { stroke: 'tomato' },
              }}
              data={pacientMeasures}
              x="key"
              y="b"
            />
          </VictoryChart>
        </div>
        <div>
          <h4>Temperatura Corporal (Cº)</h4>
          <VictoryChart
            domainPadding={{ y: 20 }}
            width={500}
            height={270}
            scale={{ x: 'time' }}
            containerComponent={
              <VictoryZoomContainer
                zoomDimension="x"
                zoomDomain={zoomDomain3}
                onZoomDomainChange={handleSetZoomDomain3}
              />
            }
          >
            <VictoryAxis dependentAxis tickFormat={x => parseInt(x, 10)} />
            <VictoryAxis />
            <VictoryLine
              style={{
                data: { stroke: 'tomato' },
              }}
              data={pacientMeasures}
              x="key"
              y="c"
            />
          </VictoryChart>
          <VictoryChart
            domainPadding={{ y: 20 }}
            padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
            width={500}
            height={100}
            scale={{ x: 'time' }}
            containerComponent={
              <VictoryBrushContainer
                brushDimension="x"
                brushDomain={zoomDomain3}
                onBrushDomainChange={handleSetZoomDomain3}
              />
            }
          >
            <VictoryAxis />
            <VictoryLine
              style={{
                data: { stroke: 'tomato' },
              }}
              data={pacientMeasures}
              x="key"
              y="c"
            />
          </VictoryChart>
        </div>
      </div>
    </Container>
  );
};

export default UserGraphs;
