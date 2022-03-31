import { cx } from "@emotion/css";

type TapOption = {
  name: string;
  value: string;
};

const Tab = ({
  tabs,
  currentTab,
  onChange,
}: {
  tabs: TapOption[];
  currentTab: string;
  onChange: (tab: string) => void;
}) => {
  return (
    <div>
      <div className="mt-4">
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabs.map((tab) => (
            <span
              key={tab.name}
              className={cx(
                currentTab === tab.value
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-500 hover:text-gray-700",
                "px-3 py-2 font-medium text-sm rounded-md cursor-pointer"
              )}
              onClick={() => {
                onChange(tab.value);
              }}
            >
              {tab.name}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Tab;
