<?php
/**
 * GetMessagingActionResponseEmbeddedTest
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
use OpenAPI\Client\Model\messaging\v1\GetMessagingActionResponseEmbedded;

/**
 * GetMessagingActionResponseEmbeddedTest Class Doc Comment
 *
 * @category    Class
 * @description The embedded response associated with the messaging action.
 * @package     OpenAPI\Client
 */
class GetMessagingActionResponseEmbeddedTest extends TestCase
{

    private GetMessagingActionResponseEmbedded $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetMessagingActionResponseEmbedded();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetMessagingActionResponseEmbedded"
     */
    public function testGetMessagingActionResponseEmbedded()
    {
        $this->assertInstanceOf(GetMessagingActionResponseEmbedded::class, $this->model);
    }

    /**
     * Test attribute "schema"
     */
    public function testPropertySchema()
    {
        
        $testValue = new \OpenAPI\Client\Model\messaging\v1\GetSchemaResponse();
        
        $this->model->setSchema($testValue);
        $this->assertEquals($testValue, $this->model->getSchema());
    }
}
