import React, { ChangeEvent, useEffect, useState } from "react";
import { Gif } from "@giphy/react-components";
import { IGif } from "@giphy/js-types";

import useDebounce from "../hooks/useDebounce";
import { giphyFetch } from "../modules/giphy";
import styles from "./styles.module.scss";

const MainPage: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [gitList, setGifList] = useState<IGif[]>([]);

  const searchText = useDebounce(keyword, 300);

  const fetchGifs = async (searchTerm: string, offset: number) => {
    const { data } = await giphyFetch.search(searchTerm, { offset, limit: 20 });
    setGifList(data);
  };

  const prevPage = () => {
    if (currentPage === 0) return;
    setCurrentPage((prev: number) => prev - 1);
  };

  const nextPage = () => {
    setCurrentPage((prev: number) => prev + 1);
  };

  useEffect(() => {
    fetchGifs(searchText, 20 * currentPage);
  }, [searchText, currentPage]);

  return (
    <div className={styles.container}>
      <input
        value={keyword}
        type="text"
        placeholder="Search text here..."
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setKeyword(e.target.value);
        }}
        className={styles.searchText}
      />
      <h3>Search result</h3>
      <div className={styles.wrapper}>
        {gitList.map((gif: IGif) => (
          <div className={styles.gifWrapper} key={gif.id}>
            <Gif gif={gif} width={200} />
          </div>
        ))}
      </div>
      <div className={styles.buttonWrapper}>
        <button type="button" onClick={prevPage} className={styles.button}>
          Prev
        </button>
        <button type="button" onClick={nextPage} className={styles.button}>
          Next
        </button>
      </div>
    </div>
  );
};

export default MainPage;
