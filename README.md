![Oscar](https://github.com/Rutger-Knijnenburg/Oscar-Dashboard/blob/main/appPackage/color.png?raw=true)

# Oscar Onboarding Teams App

I had a blast working on this short project. It's a Teams tab application that uses the Microsoft Graph Toolkit extensively. It was my first time using the MGT toolkit, and I really enjoyed it!

Setting up the Teams app was easy, way better then what I was used to do. 

This app includes:

- Meetup widget -> Encourage new employees to meet their new colleagues
- Onboarding challanges -> Powered by Planner encourage the new employee to get to know the office etc
- Todo -> A new work environment can be overwhelming. By using Microsoft To-Do the user could more easily manage their day-to-day workload
- Agenda -> The first weeks are always very busy, so knowing what's upcoming on your agenda is nice
- Files -> The onboarding files in a SharePoint site collection are shown to the employee to get their info faster
- Ask Oscar -> Using Language Studio's Custom Question Answering service the employee can chitchat with Oscar, or ask Oscar questions about their new environment. The service is trained using some generated documents (policies) in Language Studio. 

I wished to do so much more, so this is not over yet 😈 #WIP. 

## Prerequisites

- [Node.js](https://nodejs.org/), supported versions: 16, 18
- An M365 account. If you do not have M365 account, apply one from [M365 developer program](https://developer.microsoft.com/microsoft-365/dev-program)
- [Set up your dev environment for extending Teams apps across Microsoft 365](https://aka.ms/teamsfx-m365-apps-prerequisites)
> Please note that after you enrolled your developer tenant in Office 365 Target Release, it may take couple days for the enrollment to take effect.
- [Teams Toolkit Visual Studio Code Extension](https://aka.ms/teams-toolkit) version 5.0.0 and higher or [TeamsFx CLI](https://aka.ms/teamsfx-cli)

## Getting Started

Follow below instructions to get started with this application template for local debugging.

### Test your application with Visual Studio Code

1. Press `F5` or use the `Run and Debug Activity Panel` in Visual Studio Code.
1. Select a target Microsoft 365 application where the personal tabs can run: `Debug in Teams`, `Debug in Outlook` or `Debug in the Microsoft 365 app` and click the `Run and Debug` green arrow button.

### Test your application with TeamsFx CLI

1. Executing the command `teamsfx provision --env local` in your project directory.
1. Executing the command `teamsfx deploy --env local` in your project directory.
1. Executing the command `teamsfx preview --env local --m365-host <m365-host>` in your project directory, where options for `m365-host` are `teams`, `outlook` or `office`.
