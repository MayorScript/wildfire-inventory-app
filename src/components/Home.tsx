import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Layout, Typography, Button } from "antd";
import { useQuery } from "react-query";
import DateSelector from "../components/DateSelector";
import WildfireList from "../components/WildfireList";
import { fetchWildfires } from "@/lib/api";
const { Content } = Layout;
const { Title } = Typography;

const MainHome: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<number | any>(null);

  const [fetchDataEnabled, setFetchDataEnabled] = useState<boolean>(false);

  const { data, isLoading, isError, error, refetch }: any = useQuery(
    ["wildfires", selectedDate],
    () => fetchWildfires(selectedDate),
    {
      enabled: fetchDataEnabled, // Fetch data only when fetchDataEnabled is true
    },
  );

  useEffect(() => {
    setFetchDataEnabled(true);
  }, [fetchDataEnabled]);

  const tableStyle = {
    width: "500px",
    height: "500px",
    margin: "0 auto",
    background: "linear-gradient(to bottom, #ff9900, #ff5500)",
    borderRadius: "10px",
    padding: "20px",
  };

  return (
    <Layout style={tableStyle}>
      <Content style={{ padding: "20px" }}>
        <Title level={2}>Where are the Fires?</Title>
        <div className="flex flex-row justify-between">
          <DateSelector
            onDateChange={(year: any) => setSelectedDate({ year })}
          />
        </div>
        {isLoading ? (
          <div className="flex flex-col justify-center items-center">
            <div className="text-center">Fetching data, please wait...</div>
            <div className="flex justify-center items-center">
              <Image src="/giphy.gif" width={50} height={50} alt="fire" />
            </div>
          </div>
        ) : isError ? (
          <div className="text-center align-middle">
            <p>Oh No! An error occurred:</p>
            <p>{error.message}</p>
            <Button
              type="primary"
              className="text-black hover:text-white bg-white"
              onClick={refetch}
            >
              Retry
            </Button>
          </div>
        ) : data && data.length > 0 ? (
          <WildfireList data={data} />
        ) : (
          <div className="text-center align-middle">Oh No!</div>
        )}
      </Content>
    </Layout>
  );
};

export default MainHome;
