/** @jsxImportSource @emotion/react */
import qs from "qs";
import { Link } from "react-router-dom";
import "twin.macro";
import rk from "./rk.json";
import { Badge, BadgeLabel, BadgeList, BadgeValue } from "./shared/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "./shared/Card";
import {
  Description,
  DescriptionLabel,
  DescriptionList,
  DescriptionValue,
} from "./shared/DescriptionList";
import { Katex } from "./shared/Katex";
import { List, ListItem, ListItemContent, ListItemText } from "./shared/List";
import { useSearchParams } from "./shared/useSearchParams";

const SelectLeftPanelIcon = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      {...props}
    >
      <rect
        x="2.75"
        y="4.75"
        width="18.5"
        height="14.5"
        rx="1.25"
        fill="none"
        tw="stroke-current text-primary-500 group-hover:text-primary-600"
      />
      <path
        d="M2.75 6c0-.69.56-1.25 1.25-1.25h7.25v14.5H4c-.69 0-1.25-.56-1.25-1.25V6z"
        tw="fill-current text-primary-100 group-hover:text-primary-200"
      />
      <path
        d="M2.75 6c0-.69.56-1.25 1.25-1.25h7.25v14.5H4c-.69 0-1.25-.56-1.25-1.25V6z"
        tw="stroke-current text-primary-500 group-hover:text-primary-600"
        fill="none"
      />
    </svg>
  );
};

const RungeKuttaMethodListItem = ({ rungeKuttaMethod }) => {
  const searchParams = useSearchParams();
  const compareLeftURL = `/runge-kutta-methods/compare${qs.stringify(
    { ...searchParams, left: rungeKuttaMethod.id },
    { addQueryPrefix: true }
  )}`;
  const compareRightURL = `/runge-kutta-methods/compare${qs.stringify(
    { ...searchParams, right: rungeKuttaMethod.id },
    { addQueryPrefix: true }
  )}`;
  return (
    <ListItem>
      <ListItemContent tw="flex items-center justify-between space-x-6">
        <ListItemText>{rungeKuttaMethod.label}</ListItemText>
        <div tw="flex space-x-2">
          <Link className="group" to={compareLeftURL}>
            <span tw="sr-only">Select in comparison left panel</span>
            <SelectLeftPanelIcon />
          </Link>
          <Link className="group" to={compareRightURL}>
            <span tw="sr-only">Select in comparison right panel</span>
            <SelectLeftPanelIcon tw="transform rotate-180" />
          </Link>
        </div>
      </ListItemContent>
    </ListItem>
  );
};

const RungeKuttaMethodCard = ({ rungeKuttaMethod }) => {
  return (
    <Card key={rungeKuttaMethod.id}>
      <CardHeader>
        <CardTitle>{rungeKuttaMethod.label}</CardTitle>
        <BadgeList>
          <Badge>
            <BadgeLabel>Stages</BadgeLabel>
            <BadgeValue>{rungeKuttaMethod.stages}</BadgeValue>
          </Badge>
          <Badge>
            <BadgeLabel>Order</BadgeLabel>
            <BadgeValue>{rungeKuttaMethod.order}</BadgeValue>
          </Badge>
          {rungeKuttaMethod.order !== rungeKuttaMethod.num_order && (
            <Badge>
              <BadgeLabel>Numerical order</BadgeLabel>
              <BadgeValue>{rungeKuttaMethod.num_order}</BadgeValue>
            </Badge>
          )}
        </BadgeList>
      </CardHeader>
      <CardContent>
        <DescriptionList>
          <Description>
            <DescriptionLabel>Butcher tableau</DescriptionLabel>
            <DescriptionValue>
              <Katex>{rungeKuttaMethod.butcher_tableau}</Katex>
            </DescriptionValue>
          </Description>
          <Description>
            <DescriptionLabel>Characteristic polynomial</DescriptionLabel>
            <DescriptionValue>
              <Katex>{rungeKuttaMethod.stability_function}</Katex>
            </DescriptionValue>
          </Description>
          <Description>
            <DescriptionLabel>Order star</DescriptionLabel>
            <DescriptionValue tw="overflow-hidden">
              <img
                src={rungeKuttaMethod.order_star}
                alt={`Order star for ${rungeKuttaMethod.label}`}
                width="300"
                height="300"
                tw="-ml-6 -mt-8 -mb-5"
              />
            </DescriptionValue>
          </Description>
          <Description>
            <DescriptionLabel>
              RK scheme <Katex as="span">{"\\dot{u} = L(t,u)"}</Katex>
            </DescriptionLabel>
            <DescriptionValue>
              <Katex>{rungeKuttaMethod.scheme}</Katex>
            </DescriptionValue>
          </Description>
          <Description>
            <DescriptionLabel>
              Lawson scheme <Katex as="span">{"\\dot{u} = Lu + N(u)"}</Katex>
            </DescriptionLabel>
            <DescriptionValue>
              <Katex>{rungeKuttaMethod.scheme_lawson}</Katex>
            </DescriptionValue>
          </Description>
          <Description>
            <DescriptionLabel>CFL table</DescriptionLabel>
            <DescriptionValue>
              <dl tw="border border-gray-200 rounded-md divide-y divide-gray-200">
                <div tw="grid grid-cols-3 gap-4 p-3">
                  <dt tw="text-sm font-medium text-gray-500">
                    <Katex>{"y_{\\text{max}}"}</Katex>
                  </dt>
                  <dd tw="col-span-2 text-sm">
                    <Katex>{rungeKuttaMethod.cfl.y_max}</Katex>
                  </dd>
                </div>
                <div tw="grid grid-cols-3 gap-4 p-3">
                  <dt tw="text-sm font-medium text-gray-500">up-wind</dt>
                  <dd tw="col-span-2 text-sm">
                    {parseFloat(rungeKuttaMethod.cfl["up-wind"]).toFixed(3)}
                  </dd>
                </div>
                <div tw="grid grid-cols-3 gap-4 p-3">
                  <dt tw="text-sm font-medium text-gray-500">WENO 3</dt>
                  <dd tw="col-span-2 text-sm">
                    {parseFloat(rungeKuttaMethod.cfl.weno3).toFixed(3)}
                  </dd>
                </div>
                <div tw="grid grid-cols-3 gap-4 p-3">
                  <dt tw="text-sm font-medium text-gray-500">WENO 5</dt>
                  <dd tw="col-span-2 text-sm">
                    {parseFloat(rungeKuttaMethod.cfl.weno5).toFixed(3)}
                  </dd>
                </div>
              </dl>
            </DescriptionValue>
          </Description>
        </DescriptionList>
      </CardContent>
    </Card>
  );
};

export const RungeKuttaMethodList = () => {
  return (
    <List>
      {rk.map((rungeKuttaMethod) => (
        <RungeKuttaMethodListItem
          key={rungeKuttaMethod.id}
          rungeKuttaMethod={rungeKuttaMethod}
        />
      ))}
    </List>
  );
};

const RungeKuttaMethodDetails = ({ rungeKuttaMethodId }) => {
  const rungeKuttaMethod = rk.find(
    (rungeKuttaMethod) => rungeKuttaMethod.id === Number(rungeKuttaMethodId)
  );
  return rungeKuttaMethod ? (
    <RungeKuttaMethodCard rungeKuttaMethod={rungeKuttaMethod} />
  ) : (
    <div tw="flex items-center justify-center text-sm text-gray-400 font-medium text-center border-4 border-dashed border-gray-200 rounded-lg p-4">
      Select a method for comparison
    </div>
  );
};

export const RungeKuttaMethodCompare = () => {
  const { left, right } = useSearchParams();
  return (
    <div tw="space-y-4 sm:(space-y-0 flex-1 grid grid-cols-2 gap-4 min-h-full)">
      <RungeKuttaMethodDetails rungeKuttaMethodId={left} />
      <RungeKuttaMethodDetails rungeKuttaMethodId={right} />
    </div>
  );
};

export const RungeKuttaMethodGraph = () => {
  return null;
};
