import { motion } from "framer-motion";
import Link from "next/link";
import { memo } from "react";
import { PokemonListItem } from "../../types/pokemon";
import styles from "./cell.module.css";

type Props = {
  pokemon: PokemonListItem;
  router: any;
};

const Cell = ({ pokemon, router }: Props) => {
  return (
    <Link
      href={{
        pathname: `/${pokemon.id}`,
        query: { fromPage: router.pathname },
      }}
    >
      <a className={styles.cell}>
        <motion.img
          className={styles.sprite}
          src={pokemon.sprite}
          loading="lazy"
          alt=""
          layoutId={`pic-${pokemon.id}`}
        />
        <motion.span layoutId={`name-${pokemon.id}`}>
          {pokemon.formattedName}
        </motion.span>
      </a>
    </Link>
  );
};

export default memo(Cell);
