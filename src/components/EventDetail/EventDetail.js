import { DetailView } from '../DetailView';
import { getEventDetailById } from '../../data';

export const EventDetail = ({ eventId, onBack }) => (
  <DetailView detail={getEventDetailById(eventId)} onBack={onBack} backLabel="Back to events" />
);
