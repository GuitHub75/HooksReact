
export const LoadingMessage = ({title}) => {
   return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
      <p>{title}</p>
    </div>
  );
}
