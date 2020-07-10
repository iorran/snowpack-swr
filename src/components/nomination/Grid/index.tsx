import React, { useCallback } from 'react';
import { Button } from 'src/components/shared/Button';
import api from 'src/services/api'; 
import type { Nomination } from 'src/models/nomination';
import { useFetch } from 'src/hooks/useFetch';

interface GridProps {}

export const Grid = ({}: GridProps) => {
  const { data, error, mutate } = useFetch<Nomination[]>('nominations');

  if (!data) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Erro :(</p>;
  }

  const handleEdit = (nomination: Nomination) => {
    const newNomination = { ...nomination, agent: Math.random().toString() , status: 'Nominated' };
    
    api.put(`nominations/${nomination.id}`, newNomination);

    const newData = data.map(d => {
      if(d.id === nomination.id){
        return newNomination;
      }
      return d;
    });

    mutate(  
      newData,
      false
    );
 
  }; 

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>status</th>
          <th>agent</th>
          <th>last3Cargoes</th>
          <th>productId</th>
          <th>ownVatNo</th>
          <th>vettingReference</th>
          <th>warehouseAddress</th>
          <th>warehouseNo</th>
          <th>warehouseTaxNo</th>
          <th>productReceiverVat</th>
          <th>documentType</th>
          <th>clientClauseDetails</th>
        </tr>
      </thead>
        <tbody>
      {data.map((nomination) => (
          <tr key={nomination.id}>
          <td>
            <Button onClick={() => handleEdit(nomination)}>Nominate</Button>
          </td>
          <td>{nomination.status}</td>
          <td>{nomination.agent}</td>
          <td>{nomination.last3Cargoes}</td>
          <td>{nomination.productId}</td>
          <td>{nomination.ownVatNo}</td>
          <td>{nomination.vettingReference}</td>
          <td>{nomination.warehouseAddress}</td>
          <td>{nomination.warehouseNo}</td>
          <td>{nomination.warehouseTaxNo}</td>
          <td>{nomination.productReceiverVat}</td>
          <td>{nomination.documentType}</td>
          <td>{nomination.clientClauseDetails}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};
