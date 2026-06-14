// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      style={{
        cursor: 'grab',

        position: 'relative',
        overflow: 'hidden',

        minWidth: '130px',
        height: '64px',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: '12px',

        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',

        border: '1px solid #dbe4ee',

        color: '#0f172a',

        boxShadow:
          '0 1px 2px rgba(15,23,42,0.04), 0 4px 12px rgba(15,23,42,0.06)',

        fontSize: '14px',
        fontWeight: 600,

        letterSpacing: '-0.01em',

        transition: 'all 0.2s ease',
      }}
      draggable
    >
      <>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: '#2563eb',
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
          }}
        />

        <span>{label}</span>
      </>
    </div>
  );
};
