import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
  to: string;                               // ← destino de la tarjeta
  icon?: string;                            // ← emoji opcional
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>; // si preferís SVG
};

// ⚠️ Como estás usando el preset classic, las rutas van con /docs/...
const FeatureList: FeatureItem[] = [
  {
    title: 'Diagramas',
    description: <>Circuitos, topologías, markmaps y más.</>,
    to: '/docs/20-Ingeniería/Diagramas',    // categoría/índice de diagramas
    icon: '📈',
  },
  {
    title: 'APIs',
    description: <>OpenAPI, quickstarts y guías de uso.</>,
    to: '/docs/50-Productos/apis',           // sección de APIs
    icon: '🔌',
  },
  {
    title: 'Procesos',
    description: <>Onboarding, SDLC, incidentes y políticas.</>,
    to: '/docs/10-Procesos',                // documentación general/procesos
    icon: '🗂️',
  },
];

function Feature({title, Svg, icon, description, to}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link className={styles.card} to={to}>
        <div className="text--center">
          {Svg ? (
            <Svg className={styles.featureSvg} role="img" />
          ) : (
            <span className={styles.emoji} aria-hidden="true">{icon}</span>
          )}
        </div>
        <div className="text--center padding-horiz--md">
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.desc}>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
