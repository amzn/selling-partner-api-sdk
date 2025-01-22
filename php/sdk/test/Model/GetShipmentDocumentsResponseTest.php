<?php
/**
 * GetShipmentDocumentsResponseTest
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
use OpenAPI\Client\Model\shipping\GetShipmentDocumentsResponse;

/**
 * GetShipmentDocumentsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the the getShipmentDocuments operation.
 * @package     OpenAPI\Client
 */
class GetShipmentDocumentsResponseTest extends TestCase
{

    private GetShipmentDocumentsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetShipmentDocumentsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetShipmentDocumentsResponse"
     */
    public function testGetShipmentDocumentsResponse()
    {
        $this->assertInstanceOf(GetShipmentDocumentsResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\shipping\GetShipmentDocumentsResult();
        
        $this->model->setPayload($testValue);
        $this->assertEquals($testValue, $this->model->getPayload());
    }
}
