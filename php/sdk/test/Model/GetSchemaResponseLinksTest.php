<?php
/**
 * GetSchemaResponseLinksTest
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
use SpApi\Model\messaging\v1\GetSchemaResponseLinks;

/**
 * GetSchemaResponseLinksTest Class Doc Comment
 *
 * @category    Class
 * @description The links response that is associated with the object.
 * @package     SpApi
 */
class GetSchemaResponseLinksTest extends TestCase
{

    private GetSchemaResponseLinks $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetSchemaResponseLinks();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetSchemaResponseLinks"
     */
    public function testGetSchemaResponseLinks()
    {
        $this->assertInstanceOf(GetSchemaResponseLinks::class, $this->model);
    }

    /**
     * Test attribute "self"
     */
    public function testPropertySelf()
    {
        
        $testValue = new \SpApi\Model\messaging\v1\LinkObject();
        
        $this->model->setSelf($testValue);
        $this->assertEquals($testValue, $this->model->getSelf());
    }
}
