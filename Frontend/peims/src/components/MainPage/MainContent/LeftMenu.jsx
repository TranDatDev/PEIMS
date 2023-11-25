import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Hamburger from "../../../assets/Hamburger.svg";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import DeleteCustomer from "./DeleteCustomer";
export default function LeftMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const menuStyles = {
        fontFamily: "Inter, sans-serif",
        fontWeight: 500,
    };
    return (
        <div className="main__left__hamburger">
            <Button
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                <img src={Hamburger} alt="" />
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
            >
                <MenuItem onClick={handleClose} sx={menuStyles}>
                    <DeleteCustomer />
                </MenuItem>
                <Divider sx={{ borderBottomWidth: 1, bgcolor: "#333" }} />
                <MenuItem onClick={handleClose} sx={menuStyles}>
                    <Link to="/">
                        Logout
                    </Link>
                </MenuItem>
            </Menu>
        </div>
    );
}
