<?php

declare(strict_types=1);

namespace Aikeedo\Starter;

use Easy\Container\Attributes\Inject;
use Easy\Http\Message\RequestMethod;
use Easy\Router\Attributes\Middleware;
use Easy\Router\Attributes\Route;
use Presentation\Middlewares\ViewMiddleware;
use Presentation\RequestHandlers\AbstractRequestHandler;
use Presentation\Response\RedirectResponse;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Presentation\Response\ViewResponse;

/**
 * CustomView handles requests for the custom page in the Aikeedo theme.
 * 
 * This class serves as a request handler for the '/[locale:locale]?/custom' 
 * route. It checks if the landing page is enabled and either displays the 
 * custom template or redirects to the app page.
 */

/**
 * Applies the ViewMiddleware to this request handler.
 * ViewMiddleware is responsible for processing and preparing view-related
 * functionality before the request is handled.
 */
#[Middleware(ViewMiddleware::class)]

/**
 * Defines the route configuration for this request handler:
 * - path: '/[locale:locale]?/custom'
 *   - [locale:locale]? is an optional parameter that captures the locale
 *   - The '?' makes the locale segment optional
 *   - Examples: '/custom', '/en-US/custom', '/es-ES/custom'
 * - method: Only responds to HTTP GET requests
 */
#[Route(path: '/[locale:locale]?/custom', method: RequestMethod::GET)]
class CustomView extends AbstractRequestHandler implements RequestHandlerInterface
{
    /**
     * Constructor for CustomView.
     *
     * @param bool $isLandingPageEnabled Configuration flag indicating if the 
     * landing page should be accessible. Injected from 
     * 'option.site.is_landing_page_enabled' configuration.
     */
    public function __construct(
        #[Inject('option.site.is_landing_page_enabled')]
        private bool $isLandingPageEnabled = true
    ) {}

    /**
     * Handles incoming HTTP requests for the custom page.
     * 
     * If the landing page is disabled, redirects to '/app'.
     * Otherwise, renders the custom.twig template.
     *
     * @param ServerRequestInterface $request The incoming HTTP request
     * @return ResponseInterface Either a RedirectResponse or ViewResponse
     */
    public function handle(
        ServerRequestInterface $request
    ): ResponseInterface {
        if (!$this->isLandingPageEnabled) {
            return new RedirectResponse('/app');
        }

        /**
         * Returns a view response using the theme's template.
         * '@theme' is a special namespace that points to the currently active 
         * theme in Aikeedo. Always use '@theme' namespace to ensure templates 
         * are loaded from your theme directory.
         */
        return new ViewResponse(
            '@theme/templates/custom.twig',
        );
    }
}
