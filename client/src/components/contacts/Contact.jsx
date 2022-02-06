function Contact({ contact }) {
  const { id, name } = contact;
  return (
    <tr>
      <td>{name}</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
  );
}

export default Contact;
