<?php
/**
 * InnerContainersDetailsTest
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
use SpApi\Model\vendor\shipments\v1\InnerContainersDetails;

/**
 * InnerContainersDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Details of the innerContainersDetails.
 * @package     SpApi
 */
class InnerContainersDetailsTest extends TestCase
{

    private InnerContainersDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InnerContainersDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InnerContainersDetails"
     */
    public function testInnerContainersDetails()
    {
        $this->assertInstanceOf(InnerContainersDetails::class, $this->model);
    }

    /**
     * Test attribute "container_count"
     */
    public function testPropertyContainerCount()
    {
        $testValue = 123;
        
        $this->model->setContainerCount($testValue);
        $this->assertEquals($testValue, $this->model->getContainerCount());
    }

    /**
     * Test attribute "container_sequence_numbers"
     */
    public function testPropertyContainerSequenceNumbers()
    {
        $testValue = [];
        
        $this->model->setContainerSequenceNumbers($testValue);
        $this->assertEquals($testValue, $this->model->getContainerSequenceNumbers());
    }
}
