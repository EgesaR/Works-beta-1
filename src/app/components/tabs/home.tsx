import { Tabs, Tab, Card, CardBody, Button } from "@nextui-org/react";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";

const HomeTab = () => {
  let tabs = [
    {
      id: "photos",
      label: "Photos",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "music",
      label: "Music",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: "videos",
      label: "Videos",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  return(
    <>
      <Card className="h-[90vh]">
        <CardBody>
          <main className="flex flex-col w-full mt-1 py-4 h-[100%] px-6 rounded-lg">
            <div className="flex flex-row w-full">
              <div className="flex-1 pr-12 mr-4">
                <h1 className="text-3xl font-medium">
                  Hi, Ray
                  <br />
                  What would you love to do today?
                </h1>
                <p className="mt-2">
                  Have better creation and inspirations with Works
                  community.
                </p>
                <div className="mt-10">
                  <button
                    className="px-4 py-3 text-sm text-black dark:text-white bg-white dark font-semibold rounded-full
         hover:text-white hover:bg-blue-700 hover:border-transparent
        focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                  >
                    Go to community
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <div className="w-[98%] h-48 bg-white rounded-xl p-8 ">
                  <label>Event:</label>
                  <label>Happy Independence to Uganda</label>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col">
              <Tabs
                aria-label="Dynamic tabs"
                variant="underlined"
                key={"primary"}
                color={"primary"}
                items={tabs}
              >
                {(item) => (
                  <Tab key={item.id} title={item.label}>
                    <Card className="text-black dark:text-white bg-white dark:bg-black ">
                      <CardBody>{item.content}</CardBody>
                    </Card>
                  </Tab>
                )}
              </Tabs>
            </div>
            <div className="purple-dark text-foreground bg-background">
              <div className="flex flex-wrap gap-4 items-center">
                <Button color="primary" variant="solid">
                  Solid
                </Button>
                <Button color="primary" variant="faded">
                  Faded
                </Button>
                <Button color="primary" variant="bordered">
                  Bordered
                </Button>
                <Button color="primary" variant="light">
                  Light
                </Button>
                <Button color="primary" variant="flat">
                  Flat
                </Button>
                <Button color="primary" variant="ghost">
                  Ghost
                </Button>
                <Button color="primary" variant="shadow">
                  Shadow
                </Button>
              </div>
            </div>
          </main>
        </CardBody>
      </Card>
    </>
  )
}

export default HomeTab;