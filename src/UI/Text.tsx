import { Typography } from "@mui/material";

const Text = () => {
  return (
    <div id="text" className="panel">
      <Typography variant="h3" color="white" sx={{ mb: 3 }}>
        Your Company
      </Typography>
      <Typography variant="h5" color="white" sx={{ mb: 3 }}>
        Promote your company here.
      </Typography>
      <Typography variant="h6" color="yellow">
        Background shapes could be company logo or product.
      </Typography>
    </div>
  );
};

export default Text;
