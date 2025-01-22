<?php
/**
 * GetSolicitationActionResponseEmbeddedTest
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
use OpenAPI\Client\Model\solicitations\GetSolicitationActionResponseEmbedded;

/**
 * GetSolicitationActionResponseEmbeddedTest Class Doc Comment
 *
 * @category    Class
 * @description GetSolicitationActionResponseEmbedded
 * @package     OpenAPI\Client
 */
class GetSolicitationActionResponseEmbeddedTest extends TestCase
{

    private GetSolicitationActionResponseEmbedded $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetSolicitationActionResponseEmbedded();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetSolicitationActionResponseEmbedded"
     */
    public function testGetSolicitationActionResponseEmbedded()
    {
        $this->assertInstanceOf(GetSolicitationActionResponseEmbedded::class, $this->model);
    }

    /**
     * Test attribute "schema"
     */
    public function testPropertySchema()
    {
        
        $testValue = new \OpenAPI\Client\Model\solicitations\GetSchemaResponse();
        
        $this->model->setSchema($testValue);
        $this->assertEquals($testValue, $this->model->getSchema());
    }
}
