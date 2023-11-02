import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import CategoryIcon from "@mui/icons-material/Category";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PaymentIcon from "@mui/icons-material/Payment";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ReportIcon from "@mui/icons-material/Report";

const customStyles = {
    backgroundColor: "#ff5d8f",
    borderRadius: "20px",
    color: "#fff", // Màu nền bạn muốn sử dụng
};

export const mainListItems = (
    <React.Fragment>
        <ListItemButton
            style={customStyles}
            component={Link}
            to="/customer/personal-account"
        >
            <ListItemIcon>
                <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Tài Khoản Cá Nhân" />
        </ListItemButton>
        <ListItemButton component={Link} to="/customer/categories">
            <ListItemIcon>
                <CategoryIcon />
            </ListItemIcon>
            <ListItemText primary="Danh Mục Chức Năng" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <PaymentIcon />
            </ListItemIcon>
            <ListItemText primary="Giao Dịch" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary="Ngân Sách" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AnalyticsIcon />
            </ListItemIcon>
            <ListItemText primary="Phân Tích" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <ReportIcon />
            </ListItemIcon>
            <ListItemText primary="Khiếu Nại" />
        </ListItemButton>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Saved reports
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItemButton>
    </React.Fragment>
);
