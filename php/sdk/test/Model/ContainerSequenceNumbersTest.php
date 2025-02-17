<?php
/**
 * ContainerSequenceNumbersTest
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
use SpApi\Model\vendor\shipments\v1\ContainerSequenceNumbers;

/**
 * ContainerSequenceNumbersTest Class Doc Comment
 *
 * @category    Class
 * @description Container sequence numbers that are involved in this shipment.
 * @package     SpApi
 */
class ContainerSequenceNumbersTest extends TestCase
{

    private ContainerSequenceNumbers $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ContainerSequenceNumbers();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ContainerSequenceNumbers"
     */
    public function testContainerSequenceNumbers()
    {
        $this->assertInstanceOf(ContainerSequenceNumbers::class, $this->model);
    }

    /**
     * Test attribute "container_sequence_number"
     */
    public function testPropertyContainerSequenceNumber()
    {
        $testValue = 'test';
        
        $this->model->setContainerSequenceNumber($testValue);
        $this->assertEquals($testValue, $this->model->getContainerSequenceNumber());
    }
}
