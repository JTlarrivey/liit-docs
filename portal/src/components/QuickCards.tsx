import React from 'react';
import Link from '@docusaurus/Link';
import styles from './QuickCards.module.css';

type Card = { title: string; description: string; to: string; emoji?: string };

const CARDS: Card[] = [
  {
    title: 'Diagramas',
    description: 'Circuitos, topologías, markmaps y más.',
    to: '/docs/20-engineering/diagrams',
    emoji: '📈',
  },
  {
    title: 'APIs',
    description: 'OpenAPI, quickstarts y guías de uso.',
    to: '/docs/50-products/apis',
    emoji: '🔌',
  },
  {
    title: 'Procesos',
    description: 'Onboarding, SDLC, incidentes y políticas.',
    to: '/docs/10-handbook',
    emoji: '🗂️',
  },
];

export default function QuickCards() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.grid}>
        {CARDS.map((c) => (
          <Link key={c.title} className={styles.card} to={c.to}>
            <div className={styles.icon} aria-hidden="true">{c.emoji}</div>
            <h3 className={styles.title}>{c.title}</h3>
            <p className={styles.desc}>{c.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
