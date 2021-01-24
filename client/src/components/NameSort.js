import React, { useEffect, useState } from 'react';

import NamePaper from './NamePaper';
import ButtonAscDsc from './ButtonAscDsc';
import Paginaion from './Pagination';

import Alert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';

import axios from 'axios';

const NameSort = (props) => {
  const { page, addRefresh } = props;
  const [allNames, setAllNames] = useState([]);
  const [deleteRefresh, setDeleteRefresh] = useState(false);
  const [ascDsc, setAscDsc] = useState(true);
  const [totalNames, setTotalNames] = useState(0);
  const [totalPersons, setTotalPersons] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = allNames.slice(indexOfFirstCard, indexOfLastCard);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/names/${page}/${ascDsc ? 'ASC' : 'DESC'}`
        );
        setAllNames(response.data.data);
        setTotalNames(response.data.results);
        setTotalPersons(
          response.data.data.reduce((prev, next) => prev + next.amount, 0)
        );
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [page, ascDsc, deleteRefresh, addRefresh]);

  const handleDeleteRefresh = () => {
    setDeleteRefresh(!deleteRefresh);
  };

  const handleAscDsc = () => {
    setAscDsc(!ascDsc);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Grid item xs={12} sm={4}>
        <ButtonAscDsc ascDsc={ascDsc} onClick={handleAscDsc} />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Alert severity='info' style={{ height: 44 }}>
          Total names: <b>{totalNames}</b>
        </Alert>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Alert severity='info' style={{ height: 44 }}>
          Total persons: <b>{totalPersons}</b>
        </Alert>
      </Grid>
      {currentCards.map((person) => (
        <Grid item xs={12} sm={6} key={person.u_id}>
          <NamePaper
            handleDeleteRefresh={handleDeleteRefresh}
            amount={person.amount}
            id={person.u_id}>
            {person.name}
          </NamePaper>
        </Grid>
      ))}
      <Grid item xs={12}>
        <Paginaion
          cardsPerPage={cardsPerPage}
          totalCards={totalNames}
          paginate={paginate}
        />
      </Grid>
    </>
  );
};

export default NameSort;
