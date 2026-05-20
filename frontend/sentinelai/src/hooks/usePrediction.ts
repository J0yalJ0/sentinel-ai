import { useState, useEffect } from 'react';

import {
  fetchPrediction,
  PredictionResponse,
  PredictionData
} from '../services/api';

export const usePrediction = (
  intervalMs: number = 5000
) => {

  const [data, setData] =
    useState<PredictionResponse | null>(null);

  const [prediction, setPrediction] =
    useState<PredictionData | null>(null);

  const [loading, setLoading] =
    useState<boolean>(true);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {

    const fetchData = async () => {

      try {

        const result =
          await fetchPrediction();

        setData(result);

        setPrediction(
          result.prediction
        );

        setError(null);

      } catch (err) {

        setError(
          'Failed to fetch threat data'
        );

      } finally {

        setLoading(false);
      }
    };

    fetchData();

    const interval = setInterval(
      fetchData,
      intervalMs
    );

    return () =>
      clearInterval(interval);

  }, [intervalMs]);

  return {
    data,
    prediction,
    loading,
    error
  };
};