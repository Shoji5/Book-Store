import React, { useState } from "react";
import MoreBtn from "./MoreBtn";
import "./CategoryNav.css";

export default function CategoryNav({
    titles = [
        "Văn học",
        "Kinh tế",
        "Tâm lí - Kĩ năng sống",
        "Sách thiếu nhi",
        "Sách giáo khoa - Tham khảo",
    ],
}) {
    const [currentTitle, setTitle] = useState(titles[0]);

    return (
        <div className="category-nav">
            <h6>Danh mục</h6>
            {titles.map((title) => (
                <p
                    className={currentTitle === title ? "active" : ""}
                    onClick={() => setTitle(title)}
                >
                    {title}
                </p>
            ))}
            <MoreBtn to="category" />
        </div>
    );
}
