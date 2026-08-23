import { DetailView } from '../DetailView';
import { getBrandDetailById } from '../../data';

export const BrandDetail = ({ brandId, onBack }) => (
  <DetailView detail={getBrandDetailById(brandId)} onBack={onBack} backLabel="Back to brands" />
);
