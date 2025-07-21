import { FlowBuilder } from '@/components/flow';
import { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <div>
      <Toaster toastOptions={{ duration: 2500 }} />
      <FlowBuilder />
    </div>
  );
}
