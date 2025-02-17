<?php
/**
 * ContainerLabelFormatTest
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
use SpApi\Model\vendor\df\shipping\v2021_12_28\ContainerLabelFormat;

/**
 * ContainerLabelFormatTest Class Doc Comment
 *
 * @category    Class
 * @description The format of the container label.
 * @package     SpApi
 */
class ContainerLabelFormatTest extends TestCase
{

    private ContainerLabelFormat $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ContainerLabelFormat();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ContainerLabelFormat"
     */
    public function testContainerLabelFormat()
    {
        $this->assertInstanceOf(ContainerLabelFormat::class, $this->model);
    }
}
