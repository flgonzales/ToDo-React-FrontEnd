


export const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

export const CheckboxExampleSimple = () => (
  <div style={styles.block}>
    <Checkbox
      label="Simple"
      style={styles.checkbox}
    />

  </div>
);
