import AppAdmin from '../../Components/AppAdmin';
import ContentAdmin from '../../Components/Contents/ContentAdmin';

export default function Index() {
  return <AppAdmin content={ContentAdmin} />;
}
