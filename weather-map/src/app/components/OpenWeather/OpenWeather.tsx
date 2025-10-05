"use client";

// import { updateCategoryByIdOrSlug } from "modules/categories/categories.api";
import { FormEvent } from "react";
import { Button } from "@/ui/Button/Button";
import "./OpenWeather.style.css";
import { SunIcon } from "@/ui/Icons/SunIcon";
import { CloudIcon } from "@/ui/Icons/CloudIcon";

export default function OpenWeather() {
  //   const [weather, setWeather] = useState(initialState);
  //   const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // await updateCategoryByIdOrSlug(category, id);
    // router.push(`/categories/${category.slug}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <Button size="sm" type="submit">
            Clima & Avisos
          </Button>
          <div className="temperature-container">
            <div className="temperature-item">
              <div className="temperature-city">Houston</div>
              <div className="temperature-so">
                30º
                <SunIcon />
              </div>
            </div>
            <div className="temperature-item">
              <div className="temperature-city">Austin</div>
              <div className="temperature-sp">
                28º
                <CloudIcon />
              </div>
            </div>
            <div className="warning-container">
              <div className="warning">Avisos</div>
              <div className="line"></div>
              <div className="warning-item">
                <div className="warning-item">
                  <div className="color-legend"> Tempestade</div>
                </div>
                <div className="bubble-color">O</div>
                <div className="color-legend"> Onda de calor</div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

// import { useRouter } from "next/navigation";

// export default function FormEditCategory({
//   initialState,
//   id,
// }: {
//   initialState: Category;
//   id: string;
// })
