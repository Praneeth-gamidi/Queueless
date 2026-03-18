import React from 'react';

function MyQueue({ queues, onLeaveQueue, calculateWaitTime }) {
  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="my-queues">
      {queues.map(queue => {
        const estimatedWaitTime = calculateWaitTime(queue.position, queue.waitTimePerPerson);
        
        return (
          <div key={queue.id} className="queue-item">
            <div className="queue-item-info">
              <h4 className="queue-item-name">{queue.name}</h4>
              <div className="queue-item-details">
                <span className="queue-position">Position: #{queue.position}</span>
                <span className="queue-wait-time">Wait: {estimatedWaitTime} mins</span>
                <span className="queue-joined-time">Joined: {formatTime(queue.joinedAt)}</span>
              </div>
            </div>
            <div className="queue-item-actions">
              <button 
                className="btn btn-leave"
                onClick={() => onLeaveQueue(queue.id)}
              >
                Leave Queue
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MyQueue;
