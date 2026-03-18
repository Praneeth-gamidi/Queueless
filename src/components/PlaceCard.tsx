import React from 'react';
import { Place } from '../types';

interface PlaceCardProps {
  place: Place;
  onJoinQueue: (place: Place) => void;
  isAlreadyJoined: boolean;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ place, onJoinQueue, isAlreadyJoined }) => {
  const estimatedWaitTime = place.queueCount * place.waitTimePerPerson;

  return (
    <div className="place-card">
      <div className="place-info">
        <h3 className="place-name">{place.name}</h3>
        <div className="place-stats">
          <div className="stat">
            <span className="stat-label">People in Queue:</span>
            <span className="stat-value">{place.queueCount}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Est. Wait Time:</span>
            <span className="stat-value">{estimatedWaitTime} mins</span>
          </div>
        </div>
      </div>
      <div className="place-actions">
        {isAlreadyJoined ? (
          <button className="btn btn-joined" disabled>
            Already Joined
          </button>
        ) : (
          <button 
            className="btn btn-join"
            onClick={() => onJoinQueue(place)}
          >
            Join Queue
          </button>
        )}
      </div>
    </div>
  );
};

export default PlaceCard;
