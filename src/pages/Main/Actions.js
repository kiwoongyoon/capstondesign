import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Actions = () => {
  return (
    <div className="main-actions">
      <p className="margin-button">
        <Link to="./choose" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            class="button button_primary"
            style={{ textDecoration: "none" }}
          >
            Get Started
          </Button>
        </Link>
        <Link to="./counselfind" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            class="button button_outline"
            style={{ textDecoration: "none" }}
          >
            인근 상담소 검색
          </Button>
        </Link>
      </p>
    </div>
  );
};

export default Actions;
