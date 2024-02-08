import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Literatura',
    Svg: require('@site/static/img/book.svg').default,
    description: (
      <>
        Mis cuentos, novelas y poemas.
      </>
    ),
  },
  {
    title: 'Educación',
    Svg: require('@site/static/img/education.svg').default,
    description: (
      <>
        Curso de comprensión lectora.
      </>
    ),
  },
  {
    title: 'Blog',
    Svg: require('@site/static/img/blog.svg').default,
    description: (
      <>
        Artículos de varios temas.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.svgWrapper}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
