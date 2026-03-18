import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PlaceCard from './components/PlaceCard';
import QueueModal from './components/QueueModal';
import MyQueue from './components/MyQueue';
import { Place, QueueItem } from './types';
import './App.css';

const App: React.FC = () => {
  // Dummy data for places
  const [places, setPlaces] = useState<Place[]>([
    { id: 1, name: 'College Canteen', queueCount: 8, waitTimePerPerson: 5 },
    { id: 2, name: 'City Hospital', queueCount: 15, waitTimePerPerson: 10 },
    { id: 3, name: 'Quick Salon', queueCount: 4, waitTimePerPerson: 15 },
    { id: 4, name: 'Bank Branch', queueCount: 12, waitTimePerPerson: 8 },
    { id: 5, name: 'Post Office', queueCount: 3, waitTimePerPerson: 5 }
  ]);

  const [myQueues, setMyQueues] = useState<QueueItem[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<QueueItem | null>(null);
  const [showQueueModal, setShowQueueModal] = useState<boolean>(false);

  const handleJoinQueue = (place: Place): void => {
    // Add user to the queue
    const updatedPlaces = places.map((p: Place) => 
      p.id === place.id ? { ...p, queueCount: p.queueCount + 1 } : p
    );
    setPlaces(updatedPlaces);

    // Add to user's queues
    const queueItem: QueueItem = {
      ...place,
      joinedAt: new Date(),
      position: place.queueCount + 1
    };
    setMyQueues([...myQueues, queueItem]);

    // Show queue modal
    setSelectedPlace(queueItem);
    setShowQueueModal(true);
  };

  const handleLeaveQueue = (queueId: number): void => {
    // Find the queue to leave
    const queueToLeave = myQueues.find((q: QueueItem) => q.id === queueId);
    if (queueToLeave) {
      // Decrease queue count
      const updatedPlaces = places.map((p: Place) => 
        p.id === queueId ? { ...p, queueCount: p.queueCount - 1 } : p
      );
      setPlaces(updatedPlaces);

      // Remove from user's queues
      setMyQueues(myQueues.filter((q: QueueItem) => q.id !== queueId));
    }
  };

  const calculateWaitTime = (queueCount: number, waitTimePerPerson: number): number => {
    return queueCount * waitTimePerPerson;
  };

  return (
    <div className="App">
      <Navbar />
      
      <main className="main-content">
        <section className="places-section">
          <h2>Available Places</h2>
          <div className="places-grid">
            {places.map((place: Place) => (
              <PlaceCard
                key={place.id}
                place={place}
                onJoinQueue={handleJoinQueue}
                isAlreadyJoined={myQueues.some((q: QueueItem) => q.id === place.id)}
              />
            ))}
          </div>
        </section>

        <section className="my-queues-section">
          <h2>My Queues</h2>
          {myQueues.length === 0 ? (
            <p className="no-queues">You haven't joined any queues yet</p>
          ) : (
            <MyQueue
              queues={myQueues}
              onLeaveQueue={handleLeaveQueue}
              calculateWaitTime={calculateWaitTime}
            />
          )}
        </section>
      </main>

      {showQueueModal && (
        <QueueModal
          queue={selectedPlace}
          onClose={() => setShowQueueModal(false)}
          calculateWaitTime={calculateWaitTime}
        />
      )}
    </div>
  );
};

export default App;
