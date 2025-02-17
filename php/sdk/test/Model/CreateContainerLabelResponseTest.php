<?php
/**
 * CreateContainerLabelResponseTest
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
use SpApi\Model\vendor\df\shipping\v2021_12_28\CreateContainerLabelResponse;

/**
 * CreateContainerLabelResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;createContainerLabel&#x60; operation.
 * @package     SpApi
 */
class CreateContainerLabelResponseTest extends TestCase
{

    private CreateContainerLabelResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateContainerLabelResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateContainerLabelResponse"
     */
    public function testCreateContainerLabelResponse()
    {
        $this->assertInstanceOf(CreateContainerLabelResponse::class, $this->model);
    }

    /**
     * Test attribute "container_label"
     */
    public function testPropertyContainerLabel()
    {
        
        $testValue = new \SpApi\Model\vendor\df\shipping\v2021_12_28\ContainerLabel();
        
        $this->model->setContainerLabel($testValue);
        $this->assertEquals($testValue, $this->model->getContainerLabel());
    }
}
