import React from 'react';
import { Card } from 'antd';

export default function MovieDetail({
    isFetching,
    Title,
    Type,
    Year,
    Poster,
}) {

    return (
        <div className="ant-page-body">
            <div className="grid-child">
                {isFetching ? (
                    <span>Fetching movie details...</span>
                ) : (
                    <Card
                        title={
                            <span>
                                <span>{Title}</span>
                            </span>
                        }
                        bordered={false}
                        style={{ width: 500 }}
                        cover={<img alt="poster" src={Poster} />}
                    >
                        <p>Type: {Type}</p>
                        <p>Year: {Year}</p>
                    </Card>
                )}
            </div>
        </div>
    );
}
