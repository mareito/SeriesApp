import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {ISerie} from '../../../application/models/viewModels/Serie.model';
import {getRecent} from '../../../infrastructure/api/seriesApi';

const RecentScreen = () => {
  const [page, setPage] = useState(1);
  const [recent, setRecent] = useState<ISerie[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getRecent(page);
      console.log(data[0]);
    })();
  }, [page]);

  return (
    <SafeAreaView>
      <Text> Recent</Text>
    </SafeAreaView>
  );
};

export default RecentScreen;
