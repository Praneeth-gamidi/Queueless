import React from 'react';
import { QueueItem } from '../types';

interface QueueModalProps {
  queue: QueueItem | null;
  onClose: () => void;
  calculateWaitTime: (queueCount: number, waitTimePerPerson: number) => number;
}

const QueueModal: React.FC<QueueModalProps> = ({ queue, onClose, calculateWaitTime }) => {
  if (!queue) return null;

  const estimatedWaitTime = calculateWaitTime(queue.position, queue.waitTimePerPerson);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Queue Joined Successfully!</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          <div className="queue-info">
            <h3>{queue.name}</h3>
            
            <div className="queue-details">
              <div className="detail-item">
                <span className="detail-label">Your Position:</span>
                <span className="detail-value position">#{queue.position}</span>
              </div>
              
              <div className="detail-item">
                <span className="detail-label">Estimated Wait Time:</span>
                <span className="detail-value time">{estimatedWaitTime} minutes</span>
              </div>
            </div>
            
            <div className="notification-message">
              <p>🔔 You will be notified when your turn is near</p>
            </div>
          </div>
        </div>
        
        <div className="modal-footer">
          <button className="btn btn-primary" onClick={onClose}>
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default QueueModal;
