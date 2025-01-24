<?php
/**
 * CreateMarketplaceItemLabelsResponseTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\CreateMarketplaceItemLabelsResponse;

/**
 * CreateMarketplaceItemLabelsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;createMarketplaceItemLabels&#x60; response.
 * @package     OpenAPI\Client
 */
class CreateMarketplaceItemLabelsResponseTest extends TestCase
{

    private CreateMarketplaceItemLabelsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateMarketplaceItemLabelsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateMarketplaceItemLabelsResponse"
     */
    public function testCreateMarketplaceItemLabelsResponse()
    {
        $this->assertInstanceOf(CreateMarketplaceItemLabelsResponse::class, $this->model);
    }

    /**
     * Test attribute "document_downloads"
     */
    public function testPropertyDocumentDownloads()
    {
        $testValue = [];
        
        $this->model->setDocumentDownloads($testValue);
        $this->assertEquals($testValue, $this->model->getDocumentDownloads());
    }
}
