import { useState, useEffect, useCallback } from 'react';
import { eventsApi } from '../lib/api/eventsApi';

export function useEvents() {
  const [state, setState] = useState({
    events: [],
    featuredEvents: [],
    loading: true,
    error: null
  });

  const fetchEvents = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      const data = await eventsApi.getAll();
      setState({
        events: data,
        featuredEvents: data.slice(0, 3),
        loading: false,
        error: null
      });
    } catch (err) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: err.message || 'Failed to fetch events'
      }));
    }
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const createEvent = async (eventData) => {
    try {
      const data = await eventsApi.create(eventData);
      setState(prev => ({
        ...prev,
        events: [...prev.events, data]
      }));
      return data;
    } catch (err) {
      throw new Error(err.message || 'Failed to create event');
    }
  };

  const updateEvent = async (id, eventData) => {
    try {
      const data = await eventsApi.update(id, eventData);
      setState(prev => ({
        ...prev,
        events: prev.events.map(event => event.id === id ? data : event)
      }));
      return data;
    } catch (err) {
      throw new Error(err.message || 'Failed to update event');
    }
  };

  return {
    ...state,
    createEvent,
    updateEvent,
    refetch: fetchEvents
  };
}