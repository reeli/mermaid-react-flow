import ReactFlow, {useNodesState, useEdgesState} from 'react-flow-renderer';
import {FC} from "react";
import {ReactFlowProps} from "react-flow-renderer/dist/esm/types/component-props";

interface Props extends ReactFlowProps {
}

const initialNodes = [
  {
    id: '1',
    type: 'dragHandleNode',
    data: {label: 'Input Node'},
    position: {x: 250, y: 25},
  },

  {
    id: '2',
    type: "dragHandleNode",
    // you can also pass a React component as a label
    data: {label: "Default NOde"},
    position: {x: 100, y: 125},
  },
  {
    id: '3',
    type: 'dragHandleNode',
    data: {label: 'Output Node'},
    position: {x: 250, y: 250},
  },
];

const initialEdges = [
  {id: 'e1-2', source: '1', target: '2'},
  {id: 'e2-3', source: '2', target: '3', animated: true},
];

export const Chart: FC<Props> = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  return (
    <>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        style={{
          backgroundColor: '#D3D2E5',
        }}
        fitView
      />
    </>
  );
}
