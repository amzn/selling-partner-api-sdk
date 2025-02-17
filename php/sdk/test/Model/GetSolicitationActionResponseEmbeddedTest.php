<?php
/**
 * GetSolicitationActionResponseEmbeddedTest
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
use SpApi\Model\solicitations\v1\GetSolicitationActionResponseEmbedded;

/**
 * GetSolicitationActionResponseEmbeddedTest Class Doc Comment
 *
 * @category    Class
 * @description GetSolicitationActionResponseEmbedded
 * @package     SpApi
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
        
        $testValue = new \SpApi\Model\solicitations\v1\GetSchemaResponse();
        
        $this->model->setSchema($testValue);
        $this->assertEquals($testValue, $this->model->getSchema());
    }
}
