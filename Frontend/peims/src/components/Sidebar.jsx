import React from 'react';
import {Link} from 'react-router-dom';

function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="/customer/personal-account">Tài khoản cá nhân</Link>
                    </li>
                    <li>
                        <Link to="/customer/categories">Danh mục chức năng</Link>
                    </li>
                    <li>
                        <Link to="/customer/finances">Giao dịch</Link>
                    </li>
                    <li>
                        <Link to="/customer/budgets">Ngân sách</Link>
                    </li>
                    <li>
                        <Link to="/customer/analyses">Phân tích</Link>
                    </li>
                    <li>
                        <Link to="/customer/report">Khiếu nại</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Sidebar;