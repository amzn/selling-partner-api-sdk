<?php
/**
 * GetDeliveryChallanDocumentResponseTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\fulfillment\inbound\v2024_03_20\GetDeliveryChallanDocumentResponse;

/**
 * GetDeliveryChallanDocumentResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;getDeliveryChallanDocumentResponse&#x60; response.
 * @package     SpApi
 */
class GetDeliveryChallanDocumentResponseTest extends TestCase
{

    private GetDeliveryChallanDocumentResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetDeliveryChallanDocumentResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetDeliveryChallanDocumentResponse"
     */
    public function testGetDeliveryChallanDocumentResponse()
    {
        $this->assertInstanceOf(GetDeliveryChallanDocumentResponse::class, $this->model);
    }

    /**
     * Test attribute "document_download"
     */
    public function testPropertyDocumentDownload()
    {
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v2024_03_20\DocumentDownload();
        
        $this->model->setDocumentDownload($testValue);
        $this->assertEquals($testValue, $this->model->getDocumentDownload());
    }
}
