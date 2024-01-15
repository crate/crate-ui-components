import { useState } from 'react';
import { Button, ConfirmDelete } from '../..';
import Section from '../Section/Section';

export default function ButtonPage() {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <Section title="Confirm Delete Modal">
      <Button onClick={openModal}>Open Modal</Button>
      <ConfirmDelete
        title="Are you sure you want to delete the following item?"
        visible={modal}
        prompt="Be aware that this action cannot be reversed. All data will be lost."
        confirmText="ITEM_ID"
        onCancel={closeModal}
        onConfirm={closeModal}
      />
    </Section>
  );
}
