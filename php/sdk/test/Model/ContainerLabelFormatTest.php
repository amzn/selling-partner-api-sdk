<?php
/**
 * ContainerLabelFormatTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\vendorDfShipping\ContainerLabelFormat;

/**
 * ContainerLabelFormatTest Class Doc Comment
 *
 * @category    Class
 * @description Format of the container label.
 * @package     OpenAPI\Client
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
