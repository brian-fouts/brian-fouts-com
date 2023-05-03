import { useRouter } from 'next/router';
import styles from './Breadcrumbs.module.css'

function Breadcrumbs() {
  const router = useRouter();

  // Get the path segments from the URL
  const segments = router.asPath.split('/').filter(Boolean);

  // Generate the breadcrumbs as an array of objects with a `label` and `path` property
  const breadcrumbs = segments.map((segment, index) => {
    const path = `/${segments.slice(0, index + 1).join('/')}`;
    return { label: segment.replace("-", " "), path };
  });

  return (
    <nav aria-label="breadcrumb" className={styles.breadcrumbs}>
      <ol>
        <li>
          <a href="/">Home</a>
        </li>
        {breadcrumbs.map((breadcrumb) => (
          <li key={breadcrumb.path}>
            <span className={styles.delimeter}>/</span>
            <a href={breadcrumb.path}>{breadcrumb.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;